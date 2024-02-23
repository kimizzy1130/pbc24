
import { useState } from "react";
import { Button, Input, Image, Row, Col, Flex } from "antd";
import "./ImageUploader.css";


type ImageUploaderProps = {
    name: string;
};

export default function TaskInput({
  name,
}: ImageUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      // upload logic here -> add blockchain backend here 
      console.log("Selected image:", selectedImage);
      // Reset the selected image after upload
      setSelectedImage(null);
    } else {
      console.log("No image selected.");
    }
  };

  return (
  
    <Row gutter={[0, 32]} style={{ display: "flex"}}>
         <Col span={8} offset={8}>
            <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            />
            <Button onClick={handleUpload}
            >
            Upload Image
            </Button>
    </Col>
            {selectedImage && (
            <Col>
                <Flex>Selected Image: {name}</Flex>
                <Image src={URL.createObjectURL(selectedImage)} alt="Selected" style={{maxWidth: "300px"}}/>
            </Col>
            )}
    </Row>
  );
}
