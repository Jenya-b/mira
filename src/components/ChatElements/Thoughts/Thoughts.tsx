import { FC } from 'react';

import { DialogSlide } from '../Dialog/Dialog';

import { useModal } from '@/hooks/useModal';
import { StringObject, StringObjectButtons } from '@/store/chat';

import { List, Title, Wrapper } from './Thoughts.styled';

interface ThoughtsProps {
	list: StringObjectButtons;
	descriptions: StringObject | undefined;
	sendCheckUser: (content: string, action: string, action_param?: number) => void;
}

export const Thoughts: FC<ThoughtsProps> = ({ list, descriptions, sendCheckUser }) => {
	const [open, openModal, closeModal] = useModal();

	return (
		<Wrapper>
			<Title>
				<h3>{Object.keys(list)[0]}</h3>
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					onClick={openModal}
					style={{ cursor: 'pointer' }}
				>
					<circle cx="13" cy="13" r="13" fill="white" />
					<path
						d="M11.79 14.928C11.778 14.856 11.772 14.784 11.772 14.712C11.772 14.64 11.772 14.574 11.772 14.514C11.772 14.094 11.844 13.728 11.988 13.416C12.132 13.104 12.318 12.822 12.546 12.57C12.786 12.306 13.032 12.06 13.284 11.832C13.548 11.592 13.806 11.346 14.058 11.094C14.226 10.926 14.376 10.752 14.508 10.572C14.64 10.38 14.742 10.182 14.814 9.978C14.886 9.762 14.922 9.558 14.922 9.366C14.922 9.018 14.838 8.724 14.67 8.484C14.514 8.232 14.292 8.046 14.004 7.926C13.728 7.794 13.398 7.728 13.014 7.728C12.69 7.728 12.372 7.776 12.06 7.872C11.76 7.968 11.502 8.118 11.286 8.322C11.082 8.526 10.95 8.79 10.89 9.114H9C9.048 8.574 9.186 8.106 9.414 7.71C9.654 7.314 9.96 6.99 10.332 6.738C10.704 6.486 11.118 6.3 11.574 6.18C12.042 6.06 12.516 6 12.996 6C13.656 6 14.274 6.114 14.85 6.342C15.438 6.558 15.912 6.906 16.272 7.386C16.644 7.866 16.83 8.49 16.83 9.258C16.83 9.654 16.77 10.014 16.65 10.338C16.542 10.662 16.38 10.968 16.164 11.256C15.96 11.544 15.72 11.826 15.444 12.102C15.168 12.402 14.892 12.672 14.616 12.912C14.34 13.152 14.112 13.41 13.932 13.686C13.752 13.962 13.656 14.31 13.644 14.73C13.644 14.766 13.638 14.802 13.626 14.838C13.626 14.862 13.626 14.892 13.626 14.928H11.79ZM12.69 19.014C12.354 19.014 12.066 18.906 11.826 18.69C11.586 18.462 11.466 18.156 11.466 17.772C11.466 17.388 11.586 17.088 11.826 16.872C12.066 16.644 12.354 16.53 12.69 16.53C13.038 16.53 13.332 16.644 13.572 16.872C13.812 17.088 13.932 17.388 13.932 17.772C13.932 18.156 13.812 18.462 13.572 18.69C13.332 18.906 13.038 19.014 12.69 19.014Z"
						fill="#292C72"
					/>
				</svg>
			</Title>
			<List>
				{Object.values(list)[0].map(({ action, content, action_param }) => (
					<li key={content}>
						<button onClick={() => sendCheckUser(content, action, action_param)}>{content}</button>
					</li>
				))}
			</List>
			<DialogSlide
				handleClickClose={closeModal}
				open={open}
				content={descriptions !== undefined ? Object.entries(descriptions)[0] : []}
			/>
		</Wrapper>
	);
};
