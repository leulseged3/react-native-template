import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../states/store';

export const useProps: TypedUseSelectorHook<RootState> = useSelector
