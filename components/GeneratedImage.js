import Image from 'next/image';

function GeneratedImage({ ...props }) {
  return (
    <Image src={props.imageUrl} width="512" height="512" alt={props.prompt} />
  );
}

export default GeneratedImage;
