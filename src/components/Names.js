import React from 'react'
import { Card, CardContent, Divider, Typography, Button, ButtonGroup } from '@material-ui/core'

const Names = ({ names, sortType, handleClickAlphabetical, handleClickAmount }) => {

    const totalAmount = (names) => {
        const reducer = (sum, name) => {
            return sum + name.amount
        }
        return names.reduce(reducer, 0)
    }

    if (!names || names.length === 0) {
        return (
            <p>no added names yet</p>
        )
    }
    let sortedNames = names;

    if (sortType === 'alphabetical') {
        sortedNames = names.sort(({ name: previousName }, { name: currentName }) => previousName.localeCompare(currentName))
    } else if (sortType === 'amount') {
        sortedNames = names.sort(({ amount: previousAmount }, { amount: currentAmount }) => currentAmount - previousAmount)
    }

    return (
        <div>
            <Card style={{ width: 475, padding: 10, marginBottom: 20 }}>
                <ButtonGroup size='small' color="primary" aria-label="outlined primary button group">
                    <Button variant='contained' color='primary' type='button' onClick={handleClickAlphabetical}>Order alphabetically</Button>
                    <Button variant='contained' color='primary' type='button' onClick={handleClickAmount}>Order by amount</Button>
                </ButtonGroup>
                <CardContent>
                    <Typography style={{ fontSize: 20 }}>How many people working at Solita are called...</Typography>
                    {sortedNames.map((n, i) =>

                        <Typography key={i}>{n.name}: {n.amount}</Typography>
                    )}
                    <Divider light />
                    <Typography>Total amount of names: {totalAmount(names)}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Names