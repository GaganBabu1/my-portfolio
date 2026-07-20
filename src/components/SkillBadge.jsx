import styles from './SkillBadge.module.css';

function SkillBadge({skill})
{
    return(
        <div className={styles.badge}>
            <span>{skill}</span>
        </div>    
    );
}

export default SkillBadge;