import Navbar from "../components/Navbar";
import "../styles/tailwind.css";
import { ProvideAuth } from "../lib/auth";
function MyApp({ Component, pageProps }) {
	return (
		<ProvideAuth>
			<Navbar />
			<Component {...pageProps} />
		</ProvideAuth>
	);
}

export default MyApp;
