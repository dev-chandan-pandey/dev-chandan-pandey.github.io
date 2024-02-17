import { Grid, GridItem, Image } from '@chakra-ui/react'
// import React from 'react'
import GitHubCalendar from 'react-github-calendar';
function Statics() {
  return (
    <Grid id='statics'
    h='500px'
  w={"100%"}
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(6, 1fr)'
  gap={4}
>
  <GridItem rowSpan={1} colSpan={2} bg='inherit'>
  <Image h={"100%"} w={"100%"} src='https://camo.githubusercontent.com/f1aaf2e9da8a3b482a49f9b762fd17bdd141be928c1621f87ea9adf55e764040/68747470733a2f2f6769746875622d726561646d652d73746174732d7369676d612d666976652e76657263656c2e6170702f6170693f757365726e616d653d6465762d6368616e64616e2d70616e646579267468656d653d726561637426626f726465725f7261646975733d342e3626686964655f626f726465723d74727565266c61796f75743d636f6d706163742673686f775f69636f6e733d74727565' alt='Dan Abramov' />
  </GridItem>
  <GridItem rowSpan={1} colSpan={2} bg='inherit'>
  <Image h={"100%"} w={"100%"} src='https://camo.githubusercontent.com/5201fc60c5a40e9e62a96f9045c3c2a7d895c90780eccf7c3f27638a179ae108/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d2f3f757365723d6465762d6368616e64616e2d70616e646579265f626f726465723d74727565267468656d653d6461726b26686964655f626f726465723d74727565267468656d653d7265616374' alt='Dan Abramov' />
  </GridItem>
  <GridItem rowSpan={1} colSpan={2} bg='inherit'>
  <Image h={"100%"} w={"100%"} src='https://camo.githubusercontent.com/ca8a0724f8c7b7309b3ef42d30a60b975134fa610e2bca7978cabc779f78093c/68747470733a2f2f6769746875622d726561646d652d73746174732d7369676d612d666976652e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d5961776572303931267468656d653d726561637426626f726465725f7261646975733d342e362673686f775f69636f6e733d7472756526636f756e745f707269766174653d7472756526686964655f626f726465723d747275652673686f775f69636f6e733d74727565' alt='Dan Abramov' />
  </GridItem>
  <GridItem  rowSpan={1} colSpan={6} >
  <GitHubCalendar username="dev-chandan-pandey"  blockMargin={4} year={"last"} dateFormat={"d, MMM,yyyy"} showWeekdayLabels={true} style={{margin:"auto"}}/>
  </GridItem>
</Grid>
  )
}

export default Statics