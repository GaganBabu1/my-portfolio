import { isValidElement } from "react";
import styles from './SkillBadge.module.css';

function SkillBadge({ skill }) {
    return (
        <div className={styles.badge}>
            {isValidElement(skill) ? skill : <span>{skill}</span>}
        </div>
    );
}

export default SkillBadge;