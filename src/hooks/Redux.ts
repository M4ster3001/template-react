import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from 'store'

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
