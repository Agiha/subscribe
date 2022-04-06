import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TodayIcon from "@mui/icons-material/Today";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import "./index.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Headers from "../../assets/APISlogo.png";
import { formatTime } from "../../utils/formatTime";
import AddIcon from "@mui/icons-material/Add";
import StaticDateRangePickerDemo from "../DatePicker/index";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const websiteDate = [
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Design Service page",
      date: "1648001123000",
      iconArr: [
        { img: Headers, name: "Maxbert" },
        { img: Headers, name: "Maxbert" },
      ],
      isShowAddToDo: true,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
  ];
  const SubstanceDate = [
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Design Service page",
      date: "1648001123000",
      iconArr: [
        { img: Headers, name: "Maxbert" },
        { img: Headers, name: "Maxbert" },
      ],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAddToDo: false,
    },
  ];
  const conceptTowData = [
    {
      title: "Design Service page",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAccessAlarm: true,
    },
    {
      title: "Home page design",
      date: "1648001123000",
      iconArr: [
        { img: Headers, name: "Maxbert" },
        { img: Headers, name: "Maxbert" },
      ],
      isShowAccessAlarm: true,
    },
    {
      title: "Create wireframe & “look and feel”",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAccessAlarm: false,
    },
    {
      title: "Braindstorming",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAccessAlarm: false,
    },
    {
      title: "Create mood board",
      date: "1648001123000",
      iconArr: [{ img: Headers, name: "Maxbert" }],
      isShowAccessAlarm: false,
    },
  ];
  return (
    <Box sx={{ width: "100%" }} className="tabBox">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab
            icon={<FormatListBulletedIcon />}
            iconPosition="start"
            label="List view"
            {...a11yProps(0)}
          />
          <Tab
            icon={<TodayIcon />}
            iconPosition="start"
            label="Date view"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="ListViewBigBox">
          <div className="ListViewBody">
            <div className="websiteBox">
              <div className="Title">
                <div className="TaskAltIconBox">
                  <TaskAltIcon className="Icon"></TaskAltIcon>
                  <span>Designspace website concept 2</span>
                </div>
                <div className="TimelapseIconbox">
                  <TimelapseIcon className="Icon"></TimelapseIcon>
                  <span>3/5 completed</span>
                </div>
              </div>
              <div className="checkBox">
                {websiteDate.map((item) => {
                  return (
                    <div className="designBox">
                      <div className="check">
                        <FormControl component="fieldset" className="Control">
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="end"
                              control={
                                <Checkbox
                                  onChange={(event) => {
                                    console.log(event.target.checked)
                                    
                                  }}
                                />
                              }
                              label={item.title}
                              labelPlacement="end"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                      <div className="time">
                        <AccessAlarmIcon className="icon"></AccessAlarmIcon>
                        <span>{formatTime(item.date, "Y-M-D H:M")}</span>
                      </div>
                      <div className="HeadsBox">
                        {item.iconArr.map((iconItem, iconIndex) => {
                          if (iconIndex > 2) {
                            return;
                          }
                          return (
                            <div className="Heads">
                              <img src={iconItem.img} alt="" />
                              <span>{iconItem.name}</span>
                            </div>
                          );
                        })}
                      </div>
                      {item.isShowAddToDo ? (
                        <div className="AddBox">
                          <AddIcon className="icon"></AddIcon>
                          <span>Add to do</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="SubstanceBox">
              <div className="Title">
                <div className="TaskAltIconBox">
                  <TaskAltIcon className="Icon"></TaskAltIcon>
                  <span>Substance Dashboard UI kit</span>
                </div>
                <div className="TimelapseIconbox">
                  <TimelapseIcon className="Icon"></TimelapseIcon>
                  <span>3/5 completed</span>
                </div>
              </div>
              <div className="checkBox">
                {SubstanceDate.map((item) => {
                  return (
                    <div className="designBox">
                      <div className="check">
                        <FormControl component="fieldset" className="Control">
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="end"
                              control={<Checkbox />}
                              label={item.title}
                              labelPlacement="end"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                      <div className="time">
                        <AccessAlarmIcon className="icon"></AccessAlarmIcon>
                        <span>{formatTime(item.date, "Y-M-D H:M")}</span>
                      </div>
                      <div className="HeadsBox">
                        {item.iconArr.map((iconItem, iconIndex) => {
                          if (iconIndex > 2) {
                            return;
                          }
                          return (
                            <div className="Heads">
                              <img src={iconItem.img} alt="" />
                              <span>{iconItem.name}</span>
                            </div>
                          );
                        })}
                      </div>
                      {item.isShowAddToDo ? (
                        <div className="AddBox">
                          <AddIcon className="icon"></AddIcon>
                          <span>Add to do</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="DateView">
          <div className="DatePicker">
            <StaticDateRangePickerDemo></StaticDateRangePickerDemo>
          </div>
          <div className="conceptTowBox">
            {conceptTowData.map((item) => {
              return (
                <div className="conceptTow">
                  <div className="caption">
                    Designspace website concept 2<span></span>
                  </div>
                  <div className="options">
                    <div className="timeBox">
                      {formatTime(item.date, "Y:M:D:H")}
                    </div>
                    <div className="checkBox">
                      <div className="designBox">
                        <div className="check">
                          <FormControl component="fieldset" className="Control">
                            <FormGroup aria-label="position" row>
                              <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label={item.title}
                                labelPlacement="end"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                        {item.isShowAccessAlarm ? (
                          <div className="time">
                            <AccessAlarmIcon className="icon"></AccessAlarmIcon>
                            <span>{formatTime(item.date, "Y-M-D H:M")}</span>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="HeadsBox">
                          {item.iconArr.map((iconItem, iconIndex) => {
                            if (iconIndex > 2) {
                              return;
                            }
                            return (
                              <div className="Heads">
                                <img src={iconItem.img} alt="" />
                                <span>{iconItem.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
