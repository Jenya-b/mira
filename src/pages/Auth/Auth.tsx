import { FC, useState } from 'react';

import authImg from '@/assets/images/authImg.png';
import vkIcon from '@/assets/images/icons/vk.svg';
import yandexIcon from '@/assets/images/icons/yandex.svg';
import { CodeBlock } from '@/components/Auth/CodeBlock';
import { EmailBlock } from '@/components/Auth/EmailBlock';
import { PhoneBlock } from '@/components/Auth/PhoneBlock';

import {
	Content,
	ImageWrap,
	Wrapper,
	Grid,
	ButtonSecondary,
	ControlsInfo,
	Controls,
} from './Auth.styled';

export enum AuthEnum {
	PHONE,
	COD,
	EMAIL,
}

const AuthPage: FC = () => {
	const [authParam, setAuthParam] = useState<AuthEnum>(AuthEnum.PHONE);
	const [phoneNumber, setPhoneNumber] = useState('+7');
	const [codeNumber, setCodeNumber] = useState('');

	const renderAuthBlock = (): JSX.Element => {
		switch (authParam) {
			case AuthEnum.PHONE:
				return (
					<PhoneBlock
						phoneNumber={phoneNumber}
						setPhoneNumber={setPhoneNumber}
						setAuthParam={setAuthParam}
					/>
				);

			case AuthEnum.COD:
				return (
					<CodeBlock
						codeNumber={codeNumber}
						setCodeNumber={setCodeNumber}
						phoneNumber={phoneNumber}
						setAuthParam={setAuthParam}
					/>
				);

			case AuthEnum.EMAIL:
				return <EmailBlock />;

			default:
				return <></>;
		}
	};

	return (
		<Wrapper>
			<Grid>
				<Content>
					{renderAuthBlock()}
					<Controls>
						<ButtonSecondary>
							<img src={yandexIcon} alt="" />
							<p>Войти с Яндекс ID</p>
						</ButtonSecondary>
						<ButtonSecondary>
							<img src={vkIcon} alt="" />
							<p>Войти с VK ID</p>
						</ButtonSecondary>
						<ControlsInfo>
							<span>Нажимая на кнопку, вы принимаете условия Пользовательского Соглашения.</span>
						</ControlsInfo>
					</Controls>
				</Content>
				<ImageWrap>
					<img src={authImg} alt="auth-img" />
				</ImageWrap>
			</Grid>
		</Wrapper>
	);
};

export default AuthPage;
