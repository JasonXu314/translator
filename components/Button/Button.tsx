import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	hint?: string;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({ hint, children, ...rest }) => {
	return (
		<div className={styles.main}>
			<button className={styles.button} {...rest}>
				{children}
			</button>
			{hint && <div className={styles.tooltip}>{hint}</div>}
		</div>
	);
};

export default Button;
