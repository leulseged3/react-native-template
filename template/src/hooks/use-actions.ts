import { useDispatch } from 'react-redux';
import { Dispatch } from '../states/store';

export const useActions = () => useDispatch<Dispatch>()
