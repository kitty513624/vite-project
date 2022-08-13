import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '@components/notfound/Notfound';
import Index from '../pages/index3';

const BaseRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/index" />} />
			<Route path="/index" element={<Index />} />
			<Route element={<NotFound />} />
		</Routes>
	);
};

export default BaseRouter;
