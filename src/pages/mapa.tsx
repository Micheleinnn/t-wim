import Layout from '../components/layout';
import dynamic from "next/dynamic";


const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Mapa() {
  return (
    <Layout>
      <div>
        <MapWithNoSSR />
      </div>
    </Layout>
  );
}