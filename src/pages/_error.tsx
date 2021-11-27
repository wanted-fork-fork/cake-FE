import EmptyComponent from "@src/components/molecules/Empty.component";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";

function ErrorPage() {
  return (
    <PageWrapperComponent title="" onBack={null} button={null}>
      <EmptyComponent message="에러가 발생했어요." />
    </PageWrapperComponent>
  );
}

export default ErrorPage;
