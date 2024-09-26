const Button = ({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return <button onClick={onClick}>{children}</button>;
};

const PlayButton = ({ movieName }: { movieName: string }) => {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}!`);
  };

  return (
    <Button onClick={handlePlayClick}>Play &quot;{movieName}&quot;</Button>
  );
};

const UploadButton = () => {
  return <Button onClick={() => alert('Uploading!')}>Upload Image</Button>;
};

export const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
};
