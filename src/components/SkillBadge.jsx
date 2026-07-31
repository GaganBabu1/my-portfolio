import { isValidElement } from "react";
import styles from './SkillBadge.module.css';

function SkillBadge({ skill, className = "" }) {
    return (
        <button className={`${styles.badge} ${className}`.trim()}>
            {isValidElement(skill) ? skill : <span>{skill}</span>}
        </button>
    );
}

export default SkillBadge;