import styles from "./alert.module.scss";
import cn from "classnames";

export default function Alert({ children, type, alt }) {
    return (
        <div
            className={cn({
                [styles.success]: type === "success",
                [styles.error]: type === "error",
            })}
        >
            <span
                className={cn({
                    [styles.brown]: alt === "b"
                })}
            >
                {children}
            </span>
        </div>
    );
}