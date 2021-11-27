import EmptyComponent from "@src/components/molecules/Empty.component";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";

function ErrorPage() {
  return (
    <PageWrapperComponent title="" onBack={null} button={null}>
      <EmptyComponent message="여기는 빈 페이지에요." />
    </PageWrapperComponent>
  );
}

export default ErrorPage;
