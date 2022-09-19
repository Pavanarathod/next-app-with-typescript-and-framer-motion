type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return <div className="max-w-7xl mx-auto z-20">{props.children}</div>;
};

export default Container;
