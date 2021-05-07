import React, { useState, useEffect, useContext, createContext } from "react";
import { createUser } from "./db";
import firebase from "./firebase";
import cookie from "js-cookie";
import Router from "next/router";

const authContext = createContext();

export function AuthProvider({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleUser = async (rawUser) => {
		if (rawUser) {
			const user = await formatUser(rawUser);

			const { token, ...userWithoutToken } = user;

			createUser(user.uid, userWithoutToken);

			setUser(user);
			cookie.set("weback-web-feedback-auth", true, {
				expires: 1,
			});
			setLoading(false);

			return user;
		} else {
			setUser(false);
			cookie.remove("weback-web-feedback-auth");
			setLoading(false);

			return false;
		}
	};

	const signinWithGithub = () => {
		Router.push("/dashboard");
		setLoading(true);

		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GithubAuthProvider())
			.then((response) => handleUser(response.user));
	};
	const signinWithGoogle = () => {
		Router.push("/dashboard");
		setLoading(true);

		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((response) => handleUser(response.user));
	};

	const signout = () => {
		Router.push("/");

		return firebase
			.auth()
			.signOut()
			.then(() => handleUser(false));
	};

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

		return () => unsubscribe();
	}, []);

	return {
		user,
		signinWithGithub,
		signinWithGoogle,
		signout,
		loading,
	};
}
const formatUser = async (user) => {
	const { token, claims } = await user.getIdTokenResult();

	return {
		uid: user.uid,
		email: user.email,
		name: user.displayName,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL,
		token,
		stripeRole: claims.stripeRole || "free",
	};
};
