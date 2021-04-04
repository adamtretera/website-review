import Navbar from "@/components/Navbar";
import "@/styles/tailwind.css";
import { AuthProvider } from "@/lib/auth";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ThemeProvider
				forcedTheme={Component.theme || undefined}
				attribute="class"
			>
				<Navbar />
				<Toaster />

				<Component {...pageProps} />
			</ThemeProvider>
		</AuthProvider>
	);
}

export default MyApp;
