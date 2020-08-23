import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { Modal, ModalFooter, ModalHeader, Button } from '@bootstrap-styled/v4';

import DeleteIcon from '../assets/icons/trash.png'
import { IconButton, Icon } from '../reusable/resable'
import { DELETE_POST, GET_POSTS } from '../utils/gqlQueries'



const DeletePost = (props) => {
  const [deleteModal, setDeleteModal] = useState(false)

  const handleClose = () => setDeleteModal(!deleteModal)

  const [deletePost] = useMutation(DELETE_POST, {
    update(proxy) {
      const data = proxy.readQuery({
        query: GET_POSTS
      })
      data.getPosts = data.getPosts.filter(p => p.id !== props.postId)
      proxy.writeQuery({
        query: GET_POSTS, data
      })
    },
    variables: {
      postId: props.id
    }
  })

  return (
    <>
      <IconButton bgc={'#ff3535'} onClick={() => {
          handleClose()
        }} >
        <Icon src={DeleteIcon} alt="delete" />
      </IconButton>
      <Modal isOpen={deleteModal}>
        <ModalHeader toggle={() => handleClose()}>Este vous sur ?</ModalHeader>
        <ModalFooter>
          <Button color="danger" onClick={() => {
            deletePost()
            handleClose()
          }}>oui</Button>
          <Button color="secondary" onClick={() => handleClose()}>non</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeletePost
