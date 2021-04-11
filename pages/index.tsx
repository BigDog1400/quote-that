import CommonLayout from "../components/layouts/common";
import SearchArtists from "../components/templates/SearchArtists";

function Home() {
  return (
    <CommonLayout title={"Quote That"}>
      <SearchArtists></SearchArtists>
    </CommonLayout>
  );
}

export default Home;
