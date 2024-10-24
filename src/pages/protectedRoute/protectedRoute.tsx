import { Outlet, Navigate } from 'react-router-dom';
//import { useAuth } from '../../auth/AuthProvider';
export default function ProtectedRoute() {
  // const auth = useAuth();
  // console.log("paso por el protectRouter ");
   return 1==1 ? <Outlet /> : <Navigate to="/" />
}