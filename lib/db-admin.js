import { firestore } from "./firebase-admin";
import { compareDesc, parseISO } from "date-fns";
import { logger, formatObjectKeys } from "@/utils/logger";

export async function getAllFeedback(siteId, route) {
	try {
		let ref = firestore
			.collection("feedback")
			.where("siteId", "==", siteId)
			.where("status", "==", "active");

		const feedback = [];
		const snapshot = await ref.get();

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

	sites.sort((a, b) =>
		compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
	);

	return { sites };
}
export async function getAllFeedbackForSites(uid) {
	const { sites } = await getUserSites(uid);
	const siteIds = sites.map((site) => site.id);
	const snapshot = await firestore
		.collection("feedback")
		.where("siteId", "in", siteIds)
		.get();

	const feedback = [];
	snapshot.forEach((doc) => {
		feedback.push({ id: doc.id, ...doc.data() });
	});
	return { feedback };
}
export async function getSite(siteId) {
	const doc = await firestore.collection("sites").doc(siteId).get();
	const site = { id: doc.id, ...doc.data() };

	return { site };
}
