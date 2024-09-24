interface Person {
  name: string;
  imageId: string;
}

interface AvatarProps {
  person: Person;
  size: number;
}

export default function Avatar({ person, size }: AvatarProps) {
  const getImageUrl = (person: Person, size = 's') => {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
  };

  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
