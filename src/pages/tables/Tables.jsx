
import { Input } from '@mui/material'
import ColumnGroupingTable from './GetTables'


const HeaderColumns = [
    {
        columnId: 'test1',
        // columnComponent: Input
        
    }

]

export default function Tables(){

    console.log('test')

    return (
        <>
         <ColumnGroupingTable  TableHeader = {HeaderColumns} TableBody={{name:'test'}}/>
        </>
    )
}