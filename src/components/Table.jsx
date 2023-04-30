import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell,Paper } from "@mui/material"

const style = {
    fontWeight: 700,
    fontFamily: "DM Sans",
    letterSpacing: 2,
}

function BasicTable({data}) {
 
    return (
    <TableContainer sx={{boxShadow: 0}} component={Paper} className="table-container">
        <Table aria-label="compare table">
            <TableHead >
                <TableRow sx={{borderBottom: 2}} >
                    <TableCell sx={style}>THE FEATURES</TableCell>
                    <TableCell sx={style} align="center">BASIC</TableCell>
                    <TableCell sx={style} align="center">PRO</TableCell>
                    <TableCell sx={style} align="center">BUSINESS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {data.map(row => (
                    <TableRow key={row.id} >
                        <TableCell sx={style} >{row.features}</TableCell>
                        <TableCell  align="center">{row.basic}</TableCell>
                        <TableCell  align="center">{row.pro}</TableCell>
                        <TableCell  align="center" >{row.business}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default BasicTable