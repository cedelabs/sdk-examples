
if (process.env.TEST_ENV !== "node") {
	// eslint-disable-next-line
	(global.window as any)._origin = ''
}
