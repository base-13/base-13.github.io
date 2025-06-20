import { CSSProperties, ReactNode } from 'react';
import styles from './contentBox.module.css';

export default function ContentBox({
    children,
    title,
    width,
    height,
}: {
    children: ReactNode;
    title?: string;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
}) {
    // {height} - title-box-height / 2
    const height_calculated = height && (title ? `calc(${height} - var(--title-box-height) / 2)` : height.toString());

    return (
        <div>
            {title && <div className={styles.titleBox}>{title}</div>}
            <div style={{ width, height: height_calculated }} className={styles.contentBox}>
                {children}
            </div>
        </div>
    );
}
