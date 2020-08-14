import React from 'react';

import { Grid, Paper, Divider, IconButton, Box, makeStyles, Theme } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { NavTabs, AccountCard, BalanceValue, Bg } from '../components';

import { useBalance, useUserInfo } from '../hooks';
import { users } from '../constants';

const useStyles = makeStyles((theme: Theme) => ({
	paperAccount: {
		borderTopLeftRadius: theme.spacing(0.5),
	},
})
);

// @TODO account name

function Home ():  React.ReactElement {
	const classes = useStyles();
	const userInfo = useUserInfo(users.westend);
	const [ balance ] = useBalance(userInfo.address);

	console.log(balance)

	return (
		<>
			<Bg />
			<Divider/>
			<Paper square className={classes.paperAccount}>
				<Box paddingY={1} paddingX={2}>
					<Grid container alignItems='center' spacing={1}>
						<Grid item xs={6}>
							{
								userInfo.address &&
								<AccountCard
									account={{
										address: userInfo.address,
										name: 'account name',
									}}
								/>
							}
						</Grid>
						<Grid item xs={6}>
							<Grid
								container
								spacing={1}
								wrap='nowrap'
								alignItems='center'
							>
								<Grid item xs={12}>
									<BalanceValue
										value={balance}
										size='large'
										style={{ width: '100%', justifyContent: 'flex-end' }}
									/>
								</Grid>
								<Grid item>
									<IconButton style={{ borderRadius: 4 }} >
										<VisibilityIcon />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Paper>
			<Divider/>
			<NavTabs />
		</>
	);
};

export default Home;
