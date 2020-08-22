import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@bootstrap-styled/v4';

import { CREATE_POST,  GET_POSTS} from '../utils/gqlQueries';

const ModalFromGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
  margin: 5px 0;
`;


const ModalFrom = styled.form`
  width: 100%;
  padding: 0 50px;
`;


const ModalLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #313131;
`;

const ModalInputText = styled.input`
  height: 30px;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  margin: 10px 0;
  color: '#313131';
`;

const ModalInputRadio = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 15px;
`;

const ModalInputSubmit = styled.input`
      cursor: pointer;
    padding: 0.6rem;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
    background-color: #313131;
    margin: 15px 0;
    color: #ffffff;
  :hover {
    background-color: #444444;
  }
`;

const WrapperCreatePostModal = styled.div`
  margin: 20px 0;
`;

const CreatePostModal = () => {
  const [modalValues, setModalValues] = useState({
    title: "",
    imageUrl: "",
    description: "",
    price: "",
    size: "",
    disponibility: true,
    property: ""
  })
  const [createPost] = useMutation(CREATE_POST, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: GET_POSTS
      })

      data.getPosts = [result.data.createPost, ...data.getPosts]
      proxy.writeQuery({ query: GET_POSTS, data})

      setModalValues({
        title: "",
        imageUrl: "",
        description: "",
        price: "",
        size: "",
        disponibility: true,
        property: ""
      })
    },
    variables: modalValues
  });
  
  const { handleSubmit, register, errors } = useForm();
  const [modal, setModal] = useState(false)
  const handleClose = () => setModal(!modal);

  const onChange = (event) => {
    console.log('event.target.name', event.target.name, event.target.value)
    setModalValues({ ...modalValues, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    console.log('event', event, modalValues)
    createPost();
    handleClose();
  };

  return (
    <WrapperCreatePostModal>
      <Button color="secondary" onClick={() => handleClose()}>Create new post</Button>
      <Modal isOpen={modal} toggle={() => handleClose()}>
        <ModalHeader toggle={() => handleClose()}>Creation post</ModalHeader>
        <ModalBody>
          <ModalFrom onSubmit={handleSubmit(onSubmit)}>
            <ModalFromGroup>
              <ModalLabel forHtml="title">Title :</ModalLabel>
              <ModalInputText id="title" name="title" onChange={onChange} ref={register({ required: true })} />
              {errors.title && <span>You need give a tilte</span>}
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="imageUrl">Image :</ModalLabel>
              <ModalInputText id="imageUrl" name="imageUrl" onChange={onChange} ref={register({ required: true })} />
              {errors.imageUrl && <span>You need give an image link</span>}
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="description">Description :</ModalLabel>
              <ModalInputText id="description" name="description" onChange={onChange} ref={register({ required: true })} />
              {errors.description && <span>You need give a description</span>}
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="price">price :</ModalLabel>
              <ModalInputText id="price" name="price" onChange={onChange} ref={register({ required: true })} />
              {errors.price && <span>You need give a price</span>}
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="size">Size m2 :</ModalLabel>
              <ModalInputText id="size" name="size" onChange={onChange} ref={register({ required: true })} />
              {errors.size && <span>You need give a size</span>}
            </ModalFromGroup>
            <ModalFromGroup flexDirection='row'>
              <ModalLabel forHtml="room">Room :
              <ModalInputRadio id="room" name="property" type="radio" value="room" onChange={onChange} ref={register({ required: true })} />
              </ModalLabel>
              <ModalLabel forHtml="property">Property :
              <ModalInputRadio id="property" name="property" type="radio" value="property" onChange={onChange} ref={register({ required: true })} />
              </ModalLabel>
              {errors.property && <span>Room or Property</span>}
            </ModalFromGroup>
            <ModalInputSubmit type="submit" value="Validate" />
          </ModalFrom>
        </ModalBody>
      </Modal>
    </WrapperCreatePostModal>
  )
}

export default CreatePostModal
