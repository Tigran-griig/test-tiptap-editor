import { Button } from "@/components/Button";
import buttonStyles from "@/components/Button/button.module.css";
import { DropdownButton } from "@/components/Button/dropdown";
import { ButtonTypes, DropdownDataObject } from "@/components/Button/types";
import { Card, CardContent } from "@/components/Card/Card";
import { EventsModal } from "@/components/Events/Modal";
import {
  EventsTable,
  generateTestData as generateTestDataEvent,
} from "@/components/Events/Table";
import { IncidentGrid } from "@/components/Incidents/Grid";
import { generateTestData as generateTestDataIncident } from "@/components/Incidents/List";
import { NewIncidentModal } from "@/components/Incidents/Modal";
import { IncidentType } from "@/components/Incidents/types";
import { PageHeader } from "@/components/Page/Header";
import { ModalSize } from "@/components/Page/Modal";
import { SectionHeader } from "@/components/Page/SectionHeader";
import { TabScroll } from "@/components/Tabs/TabScroll";
import { TabScrollDataObject } from "@/components/Tabs/types";
import {
  generateTestData as generateTestDataTask,
  TasksTable,
} from "@/components/Tasks/Table";
import {
  generateTestData as generateTestDataVTRA,
  VTRATable,
} from "@/components/VTRA/Table";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDay,
  faInfoCircle,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { i18n } from "@lingui/core";
import { Trans } from "@lingui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { LayoutDefault } from "../layout/default";

export default function Home() {
  const incidentsSectionTitle = i18n._("Incidents");
  const eventsSectionTitle = i18n._("My Events");
  const tasksSectionTitle = i18n._("My Tasks");
  const vtraSectionTitle = i18n._("VTRA Contract & Community Protocol");

  // test modal
  const [show, setShow] = useState(false);
  const [newIncidentModalShow, setNewIncidentModalShow] = useState(false);
  const [incidentType, setIncidentType] = useState(
    IncidentType.WorrisomeBehavior
  );

  // test items to display incidents card
  const testIncidentItems = generateTestDataIncident(6);
  // sample header buttons
  const dropdownSubButtons: DropdownDataObject[] = [
    {
      label: /* i18n */ i18n._("VTRA"),
      onClick: () => {
        setIncidentType(IncidentType.VTRA);
        setNewIncidentModalShow(true);
      },
    },
    {
      label: /* i18n */ i18n._("Worrisome Behavior"),
      onClick: () => {
        setIncidentType(IncidentType.WorrisomeBehavior);
        setNewIncidentModalShow(true);
      },
    },
  ];

  // test items to display events table
  const testEventItems = generateTestDataEvent(10);

  // test items to display tasks table
  const testTaskItems = generateTestDataTask(10);

  // test items to display vtra table
  const testVTRAItems = generateTestDataVTRA(10);

  // render tab scrolls
  const tabs: TabScrollDataObject[] = [
    {
      label: i18n._("Incidents"),
      hash: "incidents",
    },
    {
      label: i18n._("Events"),
      hash: "events",
    },
    {
      label: i18n._("Tasks"),
      hash: "tasks",
    },
    {
      label: i18n._("VTRA Contacts & Community Protocol"),
      hash: "vtra",
    },
  ];

  // main render function
  return (
    <LayoutDefault>
      <Head>
        <title>Center for Trauma Informed Practices Outreach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <div className="mt-10">
          <Trans id="Dashboard" />
        </div>
        <div>
          <DropdownButton
            className="mr-2 flex"
            options={dropdownSubButtons}
            variant={ButtonTypes.Primary}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="ml-[7px]">
                <Trans id="create incident" />
              </span>
            </div>
          </DropdownButton>
          <NewIncidentModal
            defaultType={incidentType}
            show={newIncidentModalShow}
            close={() => {
              setNewIncidentModalShow(false);
            }}
          />

          <Button
            variant={ButtonTypes.Primary}
            onClick={() => {
              setShow(true);
            }}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span className="ml-[7px]">
                <Trans id="new meeting" />
              </span>
            </div>
          </Button>

          <EventsModal
            show={show}
            size={ModalSize.lg}
            close={() => {
              setShow(false);
            }}
          />
        </div>
      </PageHeader>

      <TabScroll tabs={tabs} />

      <div id="incidents" className="mb-12">
        <SectionHeader title={incidentsSectionTitle}>
          <Link href="/incidents" passHref>
            <a
              className={combineCSSClasses(
                buttonStyles["ctip-btn"],
                buttonStyles["ctip-btn-link"],
                "text-gray-600 text-sm"
              )}
            >
              <Trans id="See all incidents" />
              <div className="inline-block ml-4">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </a>
          </Link>
        </SectionHeader>
        <IncidentGrid items={testIncidentItems} displayFilterBar={false} />
      </div>

      <div id="events" className="mb-12">
        <SectionHeader title={eventsSectionTitle}>
          <Button
            variant={ButtonTypes.Primary}
            onClick={() => {
              setShow(true);
            }}
          >
            <Trans id="Add meeting" />
          </Button>
        </SectionHeader>
        <EventsTable items={testEventItems} />
      </div>

      <div id="tasks" className="mb-12">
        <SectionHeader title={tasksSectionTitle}>
          <Button variant={ButtonTypes.Primary}>
            <Trans id="Add task" />
          </Button>
        </SectionHeader>
        <TasksTable items={testTaskItems} />
      </div>

      <div id="vtra" className="mb-12">
        <SectionHeader title={vtraSectionTitle} />
        <Card className="rounded-0 !border-[10px] !border-dark-gray mb-4">
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-[19px]">
                <Trans
                  id="
                  View the community protocol to get details on what to do
                  during an incident.
                "
                />
              </span>
              <Button variant={ButtonTypes.Primary}>
                <Trans id="View PDF" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <VTRATable items={testVTRAItems} />
      </div>
    </LayoutDefault>
  );
}
