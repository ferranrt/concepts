import { BaseLayout } from "@orchestator/presentation/layout";
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import cx from "classnames";
import styles from "./home-page.module.scss";
import { AppThumbnail } from "@orchestator/presentation/components";
import { CountryLocationService } from "@core/services/country-location-service";

const Home: NextPage = (props: any) => {
  console.log({ props });
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

  const wan_ip = req?.headers["x-real-ip"] ? req.headers["x-real-ip"] : null;

  const country_req = wan_ip
    ? (
        await new CountryLocationService().getCountryLocationByIP(
          req.headers["x-real-ip"] as string
        )
      ).countrycode
    : "default";

  return {
    props: {
      ip: wan_ip,
      country_req,
    },
  };
}

export default Home;
