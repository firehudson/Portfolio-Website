import { PDFViewer } from 'components/PDFViewer';
import { Post } from 'layouts/Post';
import styles from './Resume.module.css';

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <Post
        title="Resume"
        href="https://raw.githubusercontent.com/firehudson/Portfolio-Website/fix/content-and-features/src/assets/AdityaVaishnav_Resume.pdf"
      >
        <PDFViewer pdfLink="https://raw.githubusercontent.com/firehudson/Portfolio-Website/fix/content-and-features/src/assets/AdityaVaishnav_Resume.pdf" />
      </Post>
    </div>
  );
};
