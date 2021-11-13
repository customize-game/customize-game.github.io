import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

const updateInformationList = [
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  }
]

export interface UpdateInfoListProps {
}
const UpdateInfoList: React.FC<UpdateInfoListProps> = ({
}) => {
  return (
    <Card>
      <CardContent>
        <Typography
          align="left"
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
        >
          最新情報
        </Typography>
        <List >
          {updateInformationList.map((updateInformation, index) => (
            <Link to={updateInformation.path} key={index}>
              <ListItem dense>
                <Typography
                  align="left"
                  component="h2"
                  variant="h5"
                  color="inherit"
                  noWrap
                >
                  {updateInformation.date} {updateInformation.title}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
export default UpdateInfoList
