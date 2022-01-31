import { BaseLayout } from "@orchestator/presentation/layout";
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import cx from "classnames";
import styles from "./home-page.module.scss";
import { AppThumbnail } from "@orchestator/presentation/components";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className={styles.bg}></div>
      <div className={cx(styles.content)}>
        <div className={styles.gallery}>
          <AppThumbnail
            label="Test"
            path="/test"
            icon="https://aroundsketch.github.io/Apple-App-Icons/App%20Icon/Apple/AppStore/@SVG.svg"
          />
        </div>
        <div className={cx(styles.dock)}>a</div>
      </div>
    </BaseLayout>
  );
};

export async function getServerSideProps(
  Props: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  const { locale, req } = Props;

  return {
    props: {
      ip: req.connection.remoteAddress,
      locale: req.connection.remoteAddress,
    },
  };
}

export default Home;
