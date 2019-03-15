<Grid item xs={12}>
                        <Grid style={{ width: "100%" }} container spacing={16}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item>Saved:</Grid>
                                    <Grid item>
                                        {this.state.isSaved ? (
                                            <CheckBox
                                                style={{ fontSize: 40 }}
                                            />
                                        ) : (
                                            <CheckBoxOutlineBlank
                                                style={{ fontSize: 40 }}
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                Current Note:{" "}
                                {this.state.noteTitles[this.state.currentNote]}
                            </Grid>
                        </Grid>
                    </Grid>