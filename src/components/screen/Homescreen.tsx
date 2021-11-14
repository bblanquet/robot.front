import { h } from 'preact';
import Body from '../common/Body';
import Line from '../common/Line';
import { HomeState } from '../model/HomeState';
import { HookedComponent } from '../utils/HookedComponent';
import { HomeHook } from '../Hook/HomeHook';
import { useState } from 'preact/hooks';
import Icon from '../common/Icon';
import Notification from '../common/Notification';
import Switch from '../common/Switch';
import { actions } from '../model/ActionKind';
import LineSplit from '../common/LineSplit';
import LineRight from '../common/LineRight';
import ActiveBtn from '../common/ActiveBtn';
import { RecordingState } from '../model/RecordingState';

export default class HomeScreen extends HookedComponent<{}, HomeHook, HomeState> {
	getDefaultHook() {
		return new HomeHook(useState(HomeHook.defaultState()));
	}

	rendering() {
		return (
			<Body
				header={
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<span>
							<Icon value={'fas fa-robot'} />
							<Switch
								isLeft={this.hook.state.isOnline}
								left={<span class="badge badge-success sm-m">Online</span>}
								right={<span class="badge badge-danger sm-m">Offline</span>}
							/>
						</span>
						<LineRight>
							<button
								class="btn btn-light sm-m"
								style="color:blue;"
								onClick={(e) => {
									this.hook.order(actions.BLUE);
								}}
							>
								<Icon value={'fas fa-lightbulb'} />
							</button>
							<button
								class="btn btn-light sm-m"
								style="color:red;"
								onClick={(e) => {
									this.hook.order(actions.RED);
								}}
							>
								<Icon value={'fas fa-lightbulb'} />
							</button>
							<button
								class="btn btn-light sm-m"
								style="color:green;"
								onClick={(e) => {
									this.hook.order(actions.GREEN);
								}}
							>
								<Icon value={'fas fa-lightbulb'} />
							</button>

							<button
								class="btn btn-secondary sm-m"
								onClick={(e) => {
									this.hook.order(actions.BUZZ);
								}}
							>
								<Icon value={'fas fa-bell'} />
							</button>
							<Switch
								isLeft={this.hook.state.recordingState === RecordingState.LOADING}
								left={
									<button class="btn btn-warning sm-m">
										<Icon value="fas fa-sync fa-spin" />
									</button>
								}
								right={
									<ActiveBtn
										isActive={this.hook.state.recordingState === RecordingState.ON}
										left={<Icon value="fas fa-video-slash" />}
										right={<Icon value={'fas fa-video'} />}
										onClick={() => {
											this.hook.stream();
										}}
									/>
								}
							/>
						</LineRight>
					</nav>
				}
				content={<Notification />}
				footer={
					<LineSplit>
						{this.leftPanel()}
						{this.rightPanel()}
					</LineSplit>
				}
			/>
		);
	}

	private rightPanel() {
		return (
			<div style="width:fit-content">
				<Line>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.FORWARD);
						}}
					>
						<Icon value={'fas fa-arrow-up'} />
					</button>
				</Line>
				<Line>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.LEFT);
						}}
					>
						<Icon value={'fas fa-arrow-left'} />
					</button>
					<button class="btn btn-secondary btn-circle sm-m" onClick={(e) => {}}>
						<Icon value={'fas fa-truck-monster'} />
					</button>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.RIGHT);
						}}
					>
						<Icon value={'fas fa-arrow-right'} />
					</button>
				</Line>
				<Line>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.BACKWARD);
						}}
					>
						<Icon value={'fas fa-arrow-down'} />
					</button>
				</Line>
			</div>
		);
	}

	private leftPanel() {
		return (
			<div style="width:fit-content">
				<Line>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.HEAD_UP);
						}}
					>
						<Icon value={'fas fa-arrow-up'} />
					</button>
				</Line>
				<Line>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.HEAD_LEFT);
						}}
					>
						<Icon value={'fas fa-arrow-left'} />
					</button>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.HEAD_CENTER);
						}}
					>
						<Icon value={'fas fa-circle'} />
					</button>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.HEAD_RIGHT);
						}}
					>
						<Icon value={'fas fa-arrow-right'} />
					</button>
				</Line>
				<Line>
					<button
						class="btn btn-primary btn-circle sm-m"
						onClick={(e) => {
							this.hook.order(actions.HEAD_DOWN);
						}}
					>
						<Icon value={'fas fa-arrow-down'} />
					</button>
				</Line>
			</div>
		);
	}
}

/* <button
								class="btn btn-secondary sm-m"
								onClick={(e) => {
									this.hook.capture();
								}}
							>
								<Icon value={'fas fa-camera'} />
							</button> */
