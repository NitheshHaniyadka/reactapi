import React from 'react';
import {useState} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios';
//Components
import Item from './Item/Item'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
//Styles
import {Wrapper} from './App.styles'


export type cartItemType={
  id:number;
  email:string;
  first_name:string;
  last_name:string;
  avatar:string
}

  const getUsers=async(): Promise<cartItemType[]> =>

  await (axios.get('https://reqres.in/api/users/')).then(response=>response.data.data);


const App=()=> 
{

      const{data,isLoading,error}=useQuery<cartItemType[]>(
        'users',
        getUsers
        );
      console.log(data);

        if(isLoading) return <LinearProgress/>
        if(error) return <div>Something went wrong !</div>   
          return (
            <Wrapper>
              <Grid container spacing={3}>
                {
                  data?.map(item=>(
                    <Grid item key={item.id} xs={12} sm={4}>
                      <Item item={item}/>
                    </Grid>
                  ))
                }
              </Grid>
            </Wrapper>
          );
}

export default App;
