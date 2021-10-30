function TestPage({ id }) {
  return <div>{id}</div>;
}

export const getServerSideProps = (ctx) => {
  const { id } = ctx.query;
  return { props: { id } };
};
export default TestPage;
