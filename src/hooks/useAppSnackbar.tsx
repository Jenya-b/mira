import { VariantType, useSnackbar } from 'notistack';

export const useAppSnackbar = (): {
	openSnackbar: (variant: VariantType, message: string) => void;
} => {
	const { enqueueSnackbar } = useSnackbar();

	const openSnackbar = (variant: VariantType, message: string): void => {
		enqueueSnackbar(message, { variant });
	};

	return { openSnackbar };
};
