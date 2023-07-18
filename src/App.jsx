import react from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Main from "./components/main.jsx";
import ContextProvider from "./context/contextProvider.jsx";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<div className="app">
					<Header />
					<Main />
					<Footer />
				</div>
			</ContextProvider>
		</QueryClientProvider>
	);
}

export default App;
