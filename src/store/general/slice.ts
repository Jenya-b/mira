import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	prompt(): Promise<void>;
}

export enum DeviceTypeEnum {
	IOS,
	ANDROID_AND_OTHERS,
	DESKTOP,
}
interface InitialState {
	isOpenBurgerMenu: boolean;
	prompt: IBeforeInstallPromptEvent | null;
	isActivePWA: boolean;
	deviceType: DeviceTypeEnum | null;
	isMobileDevice: boolean;
}

const initialState: InitialState = {
	isOpenBurgerMenu: false,
	prompt: null,
	isActivePWA: false,
	deviceType: null,
	isMobileDevice: false,
};

export const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setOpenBurgerMenu(state, action: PayloadAction<boolean>): void {
			state.isOpenBurgerMenu = action.payload;
		},
		setPromptState(state, action: PayloadAction<IBeforeInstallPromptEvent | null>): void {
			state.prompt = action.payload;
		},
		setActivePWA(state, action: PayloadAction<boolean>): void {
			state.isActivePWA = action.payload;
		},
		setDeviceType(state, action: PayloadAction<string>): void {
			const regexpIos = /iPhone|iPad|iPod/i;
			const regexpOther =
				/Android|webOS|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;

			if (regexpIos.test(action.payload)) {
				state.deviceType = DeviceTypeEnum.IOS;
				state.isMobileDevice = true;
			} else if (regexpOther.test(action.payload)) {
				state.deviceType = DeviceTypeEnum.ANDROID_AND_OTHERS;
				state.isMobileDevice = true;
			} else {
				state.deviceType = DeviceTypeEnum.DESKTOP;
				state.isMobileDevice = false;
			}
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setOpenBurgerMenu, setPromptState, setActivePWA, setDeviceType, resetState } =
	generalSlice.actions;

export const generalReducer = generalSlice.reducer;
