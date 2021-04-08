import { firestore } from "./firebase-admin";
import { compareDesc, parseISO } from "date-fns";

export async function getAllFeedback(siteId) {
	try {
		const snapshot = await firestore
			.collection("feedback")
			.where("siteId", "==", siteId)
			.get();
		const feedback = [];

		snapshot.forEach((doc) => {
			feedback.push({ id: doc.id, ...doc.data() });
		});
		feedback.sort((a, b) =>
			compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
		);
		return { feedback };
	} catch (error) {
		return { error };
	}
}
export async function getUserFeedback(uid) {
	const snapshot = await firestore
		.collection("feedback")
		.where("authorId", "==", uid)
		.get();

	const feedback = [];

	snapshot.forEach((doc) => {
		feedback.push({ id: doc.id, ...doc.data() });
	});

	return { feedback };
}

export async function getAllSites() {
	const snapshot = await firestore.collection("sites").get();
	const sites = [];
	snapshot.forEach((doc) => {
		sites.push({ id: doc.id, ...doc.data() });
	});
	return { sites };
}

export async function getUserSites(uid) {
	const snapshot = await firestore
		.collection("sites")
		.where("authorId", "==", uid)
		.get();

	const sites = [];

	snapshot.forEach((doc) => {
		sites.push({ id: doc.id, ...doc.data() });
	});

	return { sites };
}
