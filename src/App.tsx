import { ChevronRight } from "lucide-react";
import "./App.css";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Switch } from "./components/ui/switch";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 pt-4">
      <Card className="shadow-lg ">
        <CardHeader className="flex flex-row items-center">
          <span>Mainboard IPO</span>
          <Switch className="data-[state=checked]:bg-purple-400" />
          <span>SME IPO</span>
        </CardHeader>
      </Card>
      <div className="pt-4">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between">
              <span>
                As on{" "}
                {new Date().toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <div className="flex flex-wrap gap-2">
                <Badge variant={"secondary"}>Open IPO's(2)</Badge>
                <Badge variant={"secondary"}>Upcoming IPO's(2)</Badge>
                <Badge variant={"secondary"}>Closed IPO's(79)</Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-4 grid-cols-1 pt-4 md:grid-cols-[1fr_3fr]">
          <aside className="order-2 md:order-1 ">
            <Card className="h-full min-h-[500px]">
              <CardContent>
                <ul className="flex flex-col gap-2">
                  <Button variant={"ghost"} className="text-lg">
                    Overview
                  </Button>
                  <Button variant={"ghost"} className="text-lg">
                    Financials
                  </Button>
                  <Button variant={"ghost"} className="text-lg">
                    Issue Objectives
                  </Button>
                  <Button variant={"ghost"} className="text-lg">
                    Timelines
                  </Button>
                  <Button variant={"ghost"} className="text-lg">
                    About Company
                  </Button>
                  <Button variant={"ghost"} className="text-lg">
                    Prospectus / RHP
                  </Button>
                </ul>
              </CardContent>
            </Card>
          </aside>

          <div className="order-1 md:order-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Card>
                <CardHeader>
                  <CardTitle>Open Mainboard IPO's</CardTitle>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold tracking-tighter">
                      2
                    </span>
                    <ChevronRight className="inline ml-2" />
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Subscription</CardTitle>
                  <div className="text-2xl font-bold">7,20x</div>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="tracking-tighter">IPO Name</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-muted-foreground tracking-tighter">
                        IPO Name
                      </TableHead>
                      <TableHead className="text-muted-foregroun tracking-tighter">
                        Price Band
                      </TableHead>
                      <TableHead className="text-muted-foregroun tracking-tighter">
                        Lots Size
                      </TableHead>
                      <TableHead className="text-muted-foregroun tracking-tighter">
                        Status
                      </TableHead>
                      <TableHead className="text-muted-foregroun tracking-tighter">
                        Subscription
                      </TableHead>
                      <TableHead className="text-muted-foregroun tracking-tighter">
                        GMP
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell>Delta Corp</TableCell>
                      <TableCell>150-160</TableCell>
                      <TableCell>90</TableCell>
                      <TableCell>
                        <Badge variant={"secondary"}>Open</Badge>
                      </TableCell>
                      <TableCell>2,65x</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Omega Industries</TableCell>
                      <TableCell>80-90</TableCell>
                      <TableCell>120</TableCell>
                      <TableCell>
                        <Badge variant={"secondary"}>Open</Badge>
                      </TableCell>
                      <TableCell>1,75x</TableCell>
                      <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fusion Ltd</TableCell>
                      <TableCell>50-52</TableCell>
                      <TableCell> </TableCell>
                      <TableCell>
                        <Badge variant={"secondary"}>Upcoming</Badge>
                      </TableCell>
                      <TableCell>1,75x</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Kalyani Motors</TableCell>
                      <TableCell>150-160</TableCell>
                      <TableCell>90</TableCell>
                      <TableCell>
                        <Badge variant={"secondary"}>Closed</Badge>
                      </TableCell>
                      <TableCell>12,60x</TableCell>
                      <TableCell>22</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground">
                        {new Date().toLocaleString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}{" "}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        200-210
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date().toLocaleString("en-IN", {
                          day: "numeric",
                          month: "long",
                        })}
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date().toLocaleString("en-IN", {
                          day: "numeric",
                          month: "long",
                        })}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date().toLocaleString("en-IN", {
                          month: "long",
                          year: "numeric",
                        })}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
