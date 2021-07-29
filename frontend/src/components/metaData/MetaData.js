import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Eming ShopIT`}</title>
    </Helmet>
  );
};

export default MetaData;
