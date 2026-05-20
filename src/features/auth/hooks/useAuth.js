import { useDispatch, useSelector } from "react-redux"
import { signOut } from "@/features/auth/store/authSlice"

export function useAuth() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state) => state.auth.user)

  const logout = () => {
    dispatch(signOut())
  }

  return {
    isAuthenticated,
    user,
    logout,
  }
}
