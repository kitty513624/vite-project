export default function getEnv() {
	console.log(import.meta.env.VITE_API_URL, 'import.meta.env.VITE_API_URL');
	return import.meta.env.VITE_API_URL;
}
