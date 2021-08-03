// anatomia de uma promise

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Promise 1');
	}, 3000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Promise 2');
	}, 1000);
});

async function logPromise1() {
	const result1 = await promise1;
	console.log(result1);
}

async function logPromise2() {
	const result2 = await promise2;
	console.log(result2);
}
logPromise1();
logPromise2();
