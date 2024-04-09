import { useState } from 'react';

export const useModal = (initialState = false): readonly [boolean, () => void, () => void] => {
	const [isOpen, setOpen] = useState(initialState);

	const openModal = (): void => setOpen(true);

	const closeModal = (): void => setOpen(false);

	return [isOpen, openModal, closeModal] as const;
};
